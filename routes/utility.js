"use strict";

class utility {
    /*
        METHOD: slugify()
        PURPOSE: Return a slugified string
    */
    slugify(string) {
        return string
        .toString()
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-\-+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
    }

    /*
        METHOD: successResponse()
        PURPOSE: Success response for api methods
    */
    successResponse(response, status = 200, msg = "Operation successful") {
        response.json({ success: true, status: status, content: msg });
    }

    /*
        METHOD: errResponse()
        PURPOSE: Error response for api methods
    */
    errResponse(response, status = 500, msg = "Internal server error") {
        response.json({ success: false, status: status, content: msg });
    }
    
    /*
        METHOD: groupBy()
        PURPOSE: 
    */
    groupBy(data, prop) {
        return data.reduce((groups, item) => {
        const val = item[prop];
        groups[val] = groups[val] || [];
        groups[val].push(item);
        return groups;
        }, {});
    }

    /*
        METHOD: randStr()
        PURPOSE: Generate random string
    */
    randStr(length) {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
}

module.exports = utility;
