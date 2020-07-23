/**
 * API Documentation
 */

 
/**
 * @api {post} https://sensorhub.tech/api/login Login
 * @apiVersion 1.0.0
 * @apiName Login
 * @apiGroup User
 * 
 * @apiParam {string} email  Email of the user.
 * @apiParam {string} password  Password of the user.
 * 
 * @apiParamExample {json} Param-Example:
 * {
 *      "email": "example@gmail.com",
 *      "password": "example123"
 * } 
 * 
 * @apiSuccess {string} auth  Authorization status.
 * @apiSuccess {string} token  Access token.
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *      "auth": "true",
 *      "token": "xxxxx.yyyyy.zzzzz"
 * }

 * @apiErrorExample Error-Response:
 * {
 * }
 */


/**
 * @api {post} https://sensorhub.tech/api/register Register new user
 * @apiVersion 1.0.0
 * @apiName Register
 * @apiGroup User
 * 
 * @apiParam {string} name Name of the user.
 * @apiParam {string} email Email of the user.
 * @apiParam {string} password Password of the user.
 * 
 * @apiParamExample {json} Param-Example:
 * {
 *      "name": "chad",
 *      "email": "example@gmail.com",
 *      "password": "example123"
 * }
 * 
 * @apiSuccess {string} status Register status
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 *      "status": "ok"
 * }
 * 
 * @apiErrorExample Error-Response:
 * {
 * }
 */


/**
 * @api {get} https://sensorhub.tech/api/me Get user information
 * @apiVersion 1.0.0
 * @apiName Me
 * @apiGroup User
 * 
 * @apiHeader {string} Authorization Authorization value.
 * 
 * @apiHeaderExample {json} Header-Example:
 * {
 *      "Authorization": "xxxxx.yyyyy.zzzzz"
 * }
 * 
 * @apiSuccess {string} _id  ID of the user.
 * @apiSuccess {String} name  Name of the user.
 * @apiSuccess {string} email Email of the user.
 * @apiSuccess {string} password Password of the user.
 * @apiSuccess {object} tokens Tokens of the user.
 * @apiSuccess {int} __v  
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *      "_id": "user123",
 *      "name": "chad",
 *      "email": "example@gmail.com",
 *      "password": "example123",
 *      "tokens": [
 *          {
 *              "_id": "token123",
 *              "token": "xxxxx.yyyyy.zzzzz"
 *          },
 *      ],
 *      "__v": 123
 * }
 * 
 * @apiErrorExample Error-Response:
 * {
 * }
 */


/**
 * @api {post} https://sensorhub.tech/api/me/logout Logout
 * @apiVersion 1.0.0
 * @apiName Logout
 * @apiGroup User
 * 
 * @apiHeader {string} Authorization Authorization value.
 * 
 * @apiHeaderExample {json} Header-Example:
 * {
 *      "Authorization": "xxxxx.yyyyy.zzzzz"
 * }
 * 
 * @apiSuccessExample Success-Response:
 * {
 * }
 * 
 * @apiErrorExample Error-Response:
 * {
 * }
 */


/**
 * @api {get} https://sensorhub.tech/api/device Get all devices
 * @apiVersion 1.0.0
 * @apiName Get all devices
 * @apiGroup Device
 * 
 * @apiHeader {string} Authorization Authorization value.
 * 
 * @apiHeaderExample {json} Header-Example:
 * {
 *      "Authorization": "xxxxx.yyyyy.zzzzz"
 * }
 * 
 * @apiSuccess {string} _id ID.
 * @apiSuccess {string} device_id ID of the device.
 * @apiSuccess {string} user_id ID of the user.
 * 
 * @apiSuccessExample {json} Success-Response:
 * [
 *      {
 *          "_id": "exampleid1",
 *          "device_id": "exampledeviceid1",
 *          "user_id": "exampleuserid1"
 *      },
 *      {
 *          "_id": "exampleid2",
 *          "device_id": "exampledeviceid2",
 *          "user_id": "exampleuserid2"
 *      },
 * ]
 * 
 * @apiErrorExample Error-Response:
 * {
 * }
 */


/**
 * @api {post} https://sensorhub.tech/api/provision Create device
 * @apiVersion 1.0.0
 * @apiName Create device
 * @apiGroup Device
 * 
 * @apiHeader {string} Authorization Authorization value.
 * 
 * @apiHeaderExample {json} Header-Example:
 * {
 *      "Authorization": "xxxxx.yyyyy.zzzzz"
 * }
 * 
 * @apiParam {string} device_id ID of the device.
 * 
 * @apiParamExample {json} Param-Example:
 * {
 *      "device_id": "Exampleid123"
 * }
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 * }
 * 
 * @apiErrorExample Error-Response:
 * {
 * }
 */


/**
 * @api {delete} https://sensorhub.tech/api/provision Delete device
 * @apiVersion 1.0.0
 * @apiName Delete device
 * @apiGroup Device
 * 
 * @apiHeader {string} Authorization Authorization value.
 * 
 * @apiHeaderExample {json} Header-Example:
 * {
 *      "Authorization": "xxxxx.yyyyy.zzzzz"
 * }
 * 
 * @apiParam {string} device_id ID of the device.
 * 
 * @apiParamExample {json} Param-Example:
 * {
 *      "device_id": "Exampleid123"
 * }
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 * }
 * 
 * @apiErrorExample Error-Response:
 * {
 * }
 */


/**
 * @api {post} https://sensorhub.tech/api/update_device Update device
 * @apiVersion 1.0.0
 * @apiName Update device
 * @apiGroup Device
 * 
 * @apiHeader {string} Authorization Authorization value.
 * 
 * @apiHeaderExample {json} Header-Example:
 * {
 *      "Authorization": "xxxxx.yyyyy.zzzzz"
 * }
 * 
 * @apiParam {string} device_id ID of the device.
 * @apiParam {string} device_name Name of the device.
 * 
 * @apiParamExample {json} Param-Example:
 * {
 *      "device_id": "Exampleid123"
 *      "device_name": "Device 123"
 * }
 * 
 * @apiSuccessExample {json} Success-Response:
 * {
 * }
 * 
 * @apiErrorExample Error-Response:
 * {
 * }
 */


/**
 * 
 */