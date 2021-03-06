/**
 * Open DAM API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { Asset } from './asset';

/**
* A list of assets
*/
export class Assets {
    'assets'?: Array<Asset>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "assets",
            "baseName": "assets",
            "type": "Array<Asset>"
        }    ];

    static getAttributeTypeMap() {
        return Assets.attributeTypeMap;
    }
}

