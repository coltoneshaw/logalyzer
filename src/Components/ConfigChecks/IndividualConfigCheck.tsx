import {
  Accordion, CheckIcon, Group, Stack, Text, useMantineTheme,
} from '@mantine/core';
import React from 'react';

import { IconCheck, IconX } from '@tabler/icons-react';
import { CheckReturn } from './runConfigChecks';

const IndividualConfigCheck = ({
  checkName,
  description,
  passed,
  value,
}: CheckReturn) => {
  const theme = useMantineTheme();
  return (
    <Accordion.Item value={checkName}>
      <Accordion.Control
        // disabled={passed === undefined}
        icon={
        passed
          ? <IconCheck color={theme.colors.green[4]} />
          : <IconX color={theme.colors.red[4]} />
      }
      >
        {
        checkName
      }
      </Accordion.Control>
      <Accordion.Panel>
        <Stack>
          <Stack>
            <Text weight="bold">Description:</Text>
            <Text>{description}</Text>
          </Stack>
          <Stack>
            {
              value.length > 0 && value.map((item) => (
                <Group spacing="xs">
                  <Text weight="bold">
                    {item.name}
                    :
                  </Text>
                  <Text>{item.value}</Text>
                </Group>
              ))
            }

          </Stack>
        </Stack>
      </Accordion.Panel>

    </Accordion.Item>
  );
};

export {
  IndividualConfigCheck,
};
