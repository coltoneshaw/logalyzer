import { en } from '#/src/i18n/en';

export type CheckReturn = {
  checkName: string,
  description: string,
  passed: boolean | undefined,
  value: { name: string, value: string | undefined }[]
};

const siteURLCheck = (
  config: MattermostConfig.Root | undefined,
): CheckReturn => {
  const { checkName, description } = en.checks.SiteURL;

  const check = () => {
    if (config === undefined) return undefined;
    if (config.ServiceSettings.SiteURL !== undefined) return true;

    return false;
  };

  return {
    checkName,
    description,
    passed: check(),
    value: [{
      name: 'Site URL',
      value: config?.ServiceSettings.SiteURL,
    }],
  };
};

/**
 *
 * Checks to see if your LDAP ID matches your SAML ID, if it doesn't the values may not match.
 */
const LdapIdMatchesSamlID = (
  config: MattermostConfig.Root | undefined,
): CheckReturn => {
  const { checkName, description } = en.checks.LdapIdMatchesSamlID;

  const check = () => {
    if (config === undefined) return undefined;
    if (!config.LdapSettings.Enable && config.SamlSettings.Enable) {
      return config.LdapSettings.IdAttribute === config.SamlSettings.IdAttribute;
    }

    return false;
  };

  return {
    checkName,
    description,
    passed: check(),
    value: [{
      name: 'LDAP ID Attribute',
      value: config?.LdapSettings.IdAttribute,
    },
    {
      name: 'SAML ID Attribute',
      value: config?.SamlSettings.IdAttribute,
    }],
  };
};

export const Checks = [
  siteURLCheck,
  LdapIdMatchesSamlID,
];
