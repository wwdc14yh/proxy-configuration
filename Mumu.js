const modifyResponse = (response) => {
  try {
    let data = JSON.parse(response.body);
    data.data.nickname = "Test";
    if (data && data.data && data.data.current_device) {
      data.data.current_device.trial_end_at = 1742436947;
      data.data.current_device.trial_status = 1;
    }
    return JSON.stringify(data);
  } catch (e) {
    console.error("Error modifying response", e);
  }
  return response.body;
};
const body = modifyResponse($response);
$done({ body });
