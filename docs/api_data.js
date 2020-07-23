define({ "api": [
  {
    "type": "post",
    "url": "https://sensorhub.tech/api/provision",
    "title": "Create device",
    "version": "1.0.0",
    "name": "Create_device",
    "group": "Device",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"xxxxx.yyyyy.zzzzz\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "device_id",
            "description": "<p>ID of the device.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n     \"device_id\": \"Exampleid123\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/documentation.js",
    "groupTitle": "Device"
  },
  {
    "type": "delete",
    "url": "https://sensorhub.tech/api/provision",
    "title": "Delete device",
    "version": "1.0.0",
    "name": "Delete_device",
    "group": "Device",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"xxxxx.yyyyy.zzzzz\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "device_id",
            "description": "<p>ID of the device.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n     \"device_id\": \"Exampleid123\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/documentation.js",
    "groupTitle": "Device"
  },
  {
    "type": "get",
    "url": "https://sensorhub.tech/api/device",
    "title": "Get all devices",
    "version": "1.0.0",
    "name": "Get_all_devices",
    "group": "Device",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"xxxxx.yyyyy.zzzzz\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "device_id",
            "description": "<p>ID of the device.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n     {\n         \"_id\": \"exampleid1\",\n         \"device_id\": \"exampledeviceid1\",\n         \"user_id\": \"exampleuserid1\"\n     },\n     {\n         \"_id\": \"exampleid2\",\n         \"device_id\": \"exampledeviceid2\",\n         \"user_id\": \"exampleuserid2\"\n     },\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/documentation.js",
    "groupTitle": "Device"
  },
  {
    "type": "post",
    "url": "https://sensorhub.tech/api/update_device",
    "title": "Update device",
    "version": "1.0.0",
    "name": "Update_device",
    "group": "Device",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"xxxxx.yyyyy.zzzzz\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "device_id",
            "description": "<p>ID of the device.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "device_name",
            "description": "<p>Name of the device.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n     \"device_id\": \"Exampleid123\"\n     \"device_name\": \"Device 123\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/documentation.js",
    "groupTitle": "Device"
  },
  {
    "type": "post",
    "url": "https://sensorhub.tech/api/login",
    "title": "Login",
    "version": "1.0.0",
    "name": "Login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n     \"email\": \"example@gmail.com\",\n     \"password\": \"example123\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "auth",
            "description": "<p>Authorization status.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Access token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"auth\": \"true\",\n     \"token\": \"xxxxx.yyyyy.zzzzz\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/documentation.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "https://sensorhub.tech/api/me/logout",
    "title": "Logout",
    "version": "1.0.0",
    "name": "Logout",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"xxxxx.yyyyy.zzzzz\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/documentation.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "https://sensorhub.tech/api/me",
    "title": "Get user information",
    "version": "1.0.0",
    "name": "Me",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": \"xxxxx.yyyyy.zzzzz\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "_id",
            "description": "<p>ID of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "tokens",
            "description": "<p>Tokens of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "__v",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"_id\": \"user123\",\n     \"name\": \"chad\",\n     \"email\": \"example@gmail.com\",\n     \"password\": \"example123\",\n     \"tokens\": [\n         {\n             \"_id\": \"token123\",\n             \"token\": \"xxxxx.yyyyy.zzzzz\"\n         },\n     ],\n     \"__v\": 123\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/documentation.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "https://sensorhub.tech/api/register",
    "title": "Register new user",
    "version": "1.0.0",
    "name": "Register",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n     \"name\": \"chad\",\n     \"email\": \"example@gmail.com\",\n     \"password\": \"example123\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>Register status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"status\": \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/documentation.js",
    "groupTitle": "User"
  }
] });
