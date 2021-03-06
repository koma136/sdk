/**
 * ORY Hydra
 * Welcome to the ORY Hydra HTTP API documentation. You will find documentation for all HTTP APIs here.
 *
 * The version of the OpenAPI document: v1.7.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { ConsentRequest } from './consentRequest';
import { ConsentRequestSession } from './consentRequestSession';

/**
* The response used to return used consent requests same as HandledLoginRequest, just with consent_request exposed as json
*/
export class PreviousConsentSession {
    'consentRequest'?: ConsentRequest;
    'grantAccessTokenAudience'?: Array<string>;
    'grantScope'?: Array<string>;
    'handledAt'?: Date;
    /**
    * Remember, if set to true, tells ORY Hydra to remember this consent authorization and reuse it if the same client asks the same user for the same, or a subset of, scope.
    */
    'remember'?: boolean;
    /**
    * RememberFor sets how long the consent authorization should be remembered for in seconds. If set to `0`, the authorization will be remembered indefinitely.
    */
    'rememberFor'?: number;
    'session'?: ConsentRequestSession;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "consentRequest",
            "baseName": "consent_request",
            "type": "ConsentRequest"
        },
        {
            "name": "grantAccessTokenAudience",
            "baseName": "grant_access_token_audience",
            "type": "Array<string>"
        },
        {
            "name": "grantScope",
            "baseName": "grant_scope",
            "type": "Array<string>"
        },
        {
            "name": "handledAt",
            "baseName": "handled_at",
            "type": "Date"
        },
        {
            "name": "remember",
            "baseName": "remember",
            "type": "boolean"
        },
        {
            "name": "rememberFor",
            "baseName": "remember_for",
            "type": "number"
        },
        {
            "name": "session",
            "baseName": "session",
            "type": "ConsentRequestSession"
        }    ];

    static getAttributeTypeMap() {
        return PreviousConsentSession.attributeTypeMap;
    }
}

