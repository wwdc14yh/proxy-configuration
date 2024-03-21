let body = JSON.parse($response.body);
body.data.nickname = "Test";
body.data.current_device.trial_end_at = 1742436947;
body.data.current_device.trial_status = 1;
console.log("body: ", body);
const bodyString = JSON.stringify(body);
console.log("bodyString: ", bodyString);
$done({ bodyString });
