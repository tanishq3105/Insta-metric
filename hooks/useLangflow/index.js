import { useState, useCallback } from 'react';
import LangflowClient from './LangflowClient';

export const useLangflow = (config = {}) => {
  const {
    baseURL = process.env.NEXT_PUBLIC_LANGFLOW_BASE_URL,
    applicationToken = process.env.NEXT_PUBLIC_LANGFLOW_APPLICATION_TOKEN,
    flowId = process.env.NEXT_PUBLIC_LANGFLOW_FLOW_ID,
    langflowId = process.env.NEXT_PUBLIC_LANGFLOW_ID,
    defaultTweaks = {
      'AstraDB-J86pc': {},
      'MistalAIEmbeddings-Lhu2K': {},
      'ParseData-6rpsn': {},
      'Prompt-waDq9': {},
      'MistralModel-6AeJS': {},
      'ChatInput-OfGHI': {},
      'ChatOutput-7Z389': {},
    }
  } = config;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const [streamData, setStreamData] = useState(null);

  const client = new LangflowClient(baseURL, applicationToken);

  const runFlow = useCallback(async ({
    inputValue,
    inputType = 'chat',
    outputType = 'chat',
    stream = false,
    tweaks = defaultTweaks,
  }) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await client.runFlow(
        flowId,
        langflowId,
        inputValue,
        inputType,
        outputType,
        tweaks,
        stream,
        (data) => setStreamData(data.chunk), // onUpdate
        () => setIsLoading(false), // onClose
        (error) => setError(error) // onError
      );

      if (!stream && result?.outputs) {
        const output = result.outputs[0].outputs[0].outputs.message;
        setResponse(output.message.text);
      }

      return result;
    } catch (err) {
      setError(err.message);
    } finally {
      if (!stream) {
        setIsLoading(false);
      }
    }
  }, [client, flowId, langflowId, defaultTweaks]);

  return {
    runFlow,
    isLoading,
    error,
    response,
    streamData,
  };
};

export default useLangflow; 