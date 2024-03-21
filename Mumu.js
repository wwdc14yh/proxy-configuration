let bodyString = $response.body;
console.log(bodyString);
let body = JSON.parse(bodyString);
body.data.nickname = "Test";
body.data.current_device.trial_end_at = 1742436947;
body.data.current_device.trial_status = 1;
console.log("body: ", body);
body = JSON.stringify(body);
console.log("bodyString: ", body);
$done({ body });

// let body = JSON.stringify({
//   "msg": "ok",
//   "data": {
//     "enabled_device_count": 1,
//     "current_device": {
//       "trial_status": 1,
//       "alias": "y的Mac mini",
//       "device_id": "aeawl5bhp4aabmnl",
//       "last_binded_at": 1711033022,
//       "trial_end_at": 17078399990
//     },
//     "nickname": "180****7914",
//     "member_status": 0,
//     "member_expired_at": 0,
//     "user_id": "aebgl5bjoiaabmdh",
//     "current_device_status": 1
//   },
//   "code": 0
// });

// $done({ body });
