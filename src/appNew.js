import axios from 'axios';
//const axios = require('axios'); // legacy way

// Make a request for a user with a given ID
// axios.get('localhost:4002/api/allUsers')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });

export async function getUser() {   
    try {
        console.log("jherhgbjr")
        const response = await axios.get('http://172.18.3.194:4002/api/allUsers');
        console.log(response.data.data[0].name, "fbjbf");
        return response.data;     
    } catch (error) {
        console.error(error);
        return error
    }
}

// updateNotification = (payload) => {
//     console.log('calling UPDATE NOTIFICATION API method');
//     try {
//         return new Promise((resolve, reject) => {
//             api_service.put({
//                 domain: 'http://localhost:9990/email',
//                 endPoint: '/v1/notifications/update',
//                 showLoader: true,
//                 payLoad: payload
//             }).then((response: any) => {
//                 let responseData = {} as IApiResponseProps;
//                 if (response.status === 200) {
//                     let notificationsResponse = (response.data && response.data.data) ? response.data.data : undefined;
//                     responseData.status = 200;
//                     responseData.response = notificationsResponse;
//                     resolve(responseData);
//                 } else {
//                     responseData.status = 400;
//                     responseData.message = response.data && response.data.message && typeof (response.data.message) === 'string' ? response.data.message : 'Something went wrong,Please try agin';
//                     resolve(responseData);
//                 }
//             }).catch((error) => {
//                 console.log('fetching Notifications------::', error);
//                 let responseData = {} as IApiResponseProps;
//                 responseData.status = 400;
//                 responseData.message = 'Something went wrong in catch block';
//             });
//         });
//     } catch (error) {
//         console.log('fetch notifications error', error);
//     }
// }

// const handleSubmitNotification = () => {
//     const payload = preparePayload();
//     console.log(payload);
//     if (!!state.id) {
//         return notification_service.updateNotification(payload);
//     } else {
//         return notification_service.createNewNotification(payload);
//     }
// };

// const addCreateNotification = async () => {
//     const hasPermissionToCreate = true;
//     if (!hasPermissionToCreate) { return; }

//     const createUpdateResponse = await handleSubmitNotification() as any;
//     console.log(createUpdateResponse);
//     if (createUpdateResponse.status === 200) {
//         dispatchState({ field: 'RESET', value: null });
//     } else {
//         showError(createUpdateResponse.message)
//     }
// };

