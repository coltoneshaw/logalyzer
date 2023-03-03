import { Accordion, Stack, Title } from '@mantine/core';
import React, { useMemo } from 'react';
import { en } from '@/i18n/en';
import { IndividualConfigCheck } from './IndividualConfigCheck';

import { Checks } from './runConfigChecks';

type ConfigCheckParams = {
  config: MattermostConfig.Root | undefined;
};

const ConfigCheck = (
  {
    config,
  }: ConfigCheckParams,
) => {
  const CheckTests = useMemo(() => Checks.map((check) => {
    const checkData = check(config);

    return (
      <IndividualConfigCheck
        checkName={checkData.checkName}
        description={checkData.description}
        passed={checkData.passed}
        value={checkData.value}
      />

    );
  }), [config]);

  return (
    <Stack
      sx={{
        width: '500px',
      }}
    >
      <Title order={2}>Config Checks</Title>
      <Accordion variant="contained">
        {CheckTests}
      </Accordion>

    </Stack>
  );
};

export {
  ConfigCheck,
};
