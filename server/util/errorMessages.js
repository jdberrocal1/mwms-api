module.exports = {
    'fatalError': {
        message:'Unknown Serious Error',
        code: 1
    },
    'required': {
        message:' field is required',
        code: 2
    },
    'minlength': {
        message:' below minimum',
        code: 3
    },
    'maxlength': {
        message:' above maximum',
        code: 4
    },
    'min': {
        message:' value is less than minimum allowed',
        code: 3
    },
    'max': {
        message:' value is more than maximum allowed',
        code: 4
    },
    'enum': {
        message:'s not an allowed value',
        code: 5
    },
    'invalidToken': {
        message:'Invalid Token',
        code: 6
    },
    'castError': {
        message:'Cast Error [Incomplete Error]',
        code: 7
    },
    'user defined': {
        message:' field is required',
        code: 8
    },
    'auth_unAuthorized': {
        message:'Unauthorized',
        code: 9
    },
    'auth_needUserPass': {
        message:'You need a username and password',
        code: 10
    },
    'auth_noUser': {
        message:'No user with the given username',
        code: 11
    },
    'auth_wrongPass': {
        message:'Wrong Password',
        code: 12
    },
    'mongoError': {
        message:'Mongo Error',
        code: 13
    }
};