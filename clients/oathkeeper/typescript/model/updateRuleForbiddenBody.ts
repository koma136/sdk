/**
 * ORY Oathkeeper
 * ORY Oathkeeper is a reverse proxy that checks the HTTP Authorization for validity against a set of rules. This service uses Hydra to validate access tokens and policies.
 *
 * The version of the OpenAPI document: v0.0.0-alpha.37
 * Contact: hi@ory.am
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* UpdateRuleForbiddenBody UpdateRuleForbiddenBody UpdateRuleForbiddenBody UpdateRuleForbiddenBody UpdateRuleForbiddenBody UpdateRuleForbiddenBody UpdateRuleForbiddenBody update rule forbidden body
*/
export class UpdateRuleForbiddenBody {
    /**
    * code
    */
    'code'?: number;
    /**
    * details
    */
    'details'?: Array<{ [key: string]: object; }>;
    /**
    * message
    */
    'message'?: string;
    /**
    * reason
    */
    'reason'?: string;
    /**
    * request
    */
    'request'?: string;
    /**
    * status
    */
    'status'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number"
        },
        {
            "name": "details",
            "baseName": "details",
            "type": "Array<{ [key: string]: object; }>"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        },
        {
            "name": "request",
            "baseName": "request",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UpdateRuleForbiddenBody.attributeTypeMap;
    }
}

