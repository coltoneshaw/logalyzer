import React from 'react';
import {
  Group, Text, useMantineTheme, rem,
} from '@mantine/core';
import {
  IconUpload, IconX, IconFileCode,
} from '@tabler/icons-react';
import { Dropzone, DropzoneProps } from '@mantine/dropzone';

type FileDropProps = Partial<DropzoneProps> & {
  onAccept: (files: File[] | undefined) => void;
  processing?: boolean;
};
const FileDrop = (
  {
    onAccept,
    processing,
  }: FileDropProps,
) => {
  const theme = useMantineTheme();
  return (
    <Dropzone
      onDrop={(files) => onAccept(files)}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={3 * 1024 ** 2}
      accept={['application/json']}
      loading={processing}
    >
      <Group
        position="center"
        spacing="xl"
        style={{ minHeight: rem(220), pointerEvents: 'none' }}
      >
        <Dropzone.Accept>
          <IconUpload
            style={{
              height: '3.2rem',
              width: '3.2rem',
            }}
            stroke={1.5}
            color={theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]}
          />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <IconX
            style={{
              height: '3.2rem',
              width: '3.2rem',
            }}
            stroke={1.5}
            color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
          />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <IconFileCode
            style={{
              height: '3.2rem',
              width: '3.2rem',
            }}
            stroke={1.5}
          />
        </Dropzone.Idle>
        <div>
          <Text size="xl" inline>
            Drag and drop the config.json file here.
          </Text>
          <Text size="sm" color="dimmed" inline mt={7}>
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </div>
      </Group>
    </Dropzone>
  );
};

export {
  FileDrop,
};
