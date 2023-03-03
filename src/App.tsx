import {
  Container, Stack, Text, Title,
} from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { ConfigCheck } from './Components/ConfigChecks/Config';
import { FileDrop } from './Components/FileDrop';

type FileArray = (File & { data: MattermostConfig.Root })[];

const upload = async (fileArray: File[]): Promise<FileArray> => {
  // Convert the FileList into an array and iterate
  const files = Array.from(fileArray).map((file) => {
    console.log(file);
    // Define a new file reader
    const reader = new FileReader();

    // Create a new promise
    return new Promise((resolve) => {
      // Resolve the promise after reading file
      reader.onload = () => resolve({
        name: file.name,
        path: file.size,
        lastModified: file.lastModified,
        data: JSON.parse(reader.result as string),
      });

      // Read the file as a text
      reader.readAsText(file);
    });
  });

  // At this point you'll have an array of results
  const res = await Promise.all(files) as FileArray;

  return res;
};

const App = () => {
  const [fileInfo, setFileInfo] = useState<FileArray | undefined>(undefined);
  const [processing, setProcessing] = useState(false);

  const onAccept = async (files: File[] | undefined) => {
    console.log(files);
    if (!files) return;
    setProcessing(true);
    const fileArray = await upload(files);
    console.log(fileArray);
    setFileInfo(fileArray);
  };

  return (
    <Container
      sx={{
        paddingTop: '2rem',
      }}
    >
      <Stack align="center">
        <Title order={1}>Logalyzer</Title>
        <Text c="dimmed">Logalyzer is a tool for analyzing log files for Mattermost.</Text>
        <FileDrop
          onAccept={onAccept}
          processing={processing}
        />
        <ConfigCheck
          config={fileInfo?.find((file) => file.name.includes('config.json'))?.data}
        />
      </Stack>
    </Container>
  );
};
export { App };
