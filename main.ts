// eslint-disable-next-line import/no-extraneous-dependencies
import BottleNeck from 'bottleneck';

const baseURL = 'http://localhost:8065';
const token = 'saftaaswc3ysxxsfnqhfx3i3dw';

type Channel = {
  'id': string,
  'create_at': number,
  'update_at': number,
  'delete_at': number,
  'team_id': string,
  'type': string,
  'display_name': string,
  'name': string,
  'header': string,
  'purpose': string,
  'last_post_at': number,
  'total_msg_count': number,
  'extra_update_at': number,
  'creator_id': string
};

const limiter = new BottleNeck({
  maxConcurrent: 8, // only one request at a time
});

async function sendRequest(url: string, options: RequestInit) {
  // await limiter.removeTokens(1);
  return limiter.schedule(() => fetch(url, options));
  // return nodeFetch(url, options);
}

const callAPI = async (
  method: string,
  endpoint: string,
  payload?: Record<string, string>,
) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  };

  const response = await sendRequest(
    `${baseURL}/api/v4/${endpoint}`,
    options,

  );
  const data = await response.json();

  if (response.status !== 200 && response.status !== 201) {
    console.log({ data });
    throw new Error('Failed to do things');
  }

  return data;
};

const channelMembership = async (id: number) => {
  console.log('creating channel', id);
  // create a channel

  try {
    const channel = await callAPI(
      'POST',
      'channels',
      {
        team_id: 'mkkc4bd7njfipd3w6aibizt6jr',
        name: `test_channel_${id}`,
        display_name: `test_channel_${id}`,
        type: 'O',
      },
    ) as Channel;

    // add user to channel
    await callAPI(
      'POST',
      `channels/${channel.id}/members`,
      {
        user_id: 'j43aftt9sjfejp6q7qcahebs8r',
      },
    );

    console.log('created channel', id);
  } catch (e) {
    console.log('error', e);
  }
};

const bulkMakeChannels = async (total: number) => {
  const promises = [];
  for (let i = 6000; i < total; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    promises.push(channelMembership(i));
  }

  await Promise.all(promises);
};
bulkMakeChannels(26000);
