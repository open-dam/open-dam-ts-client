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
import { AssetFile } from './assetFile';
import { Kind } from './kind';

/**
* A limited view of an asset with only editable fields. Formats, tags, and metadata are merged with any existing values
*/
export class AssetUpdate {
    'kind'?: Kind;
    'file'?: AssetFile;
    /**
    * additional assets/files associated with the asset
    */
    'formats'?: Array<Asset>;
    /**
    * A list of metadata tags associated with the asset
    */
    'tags'?: Array<string>;
    /**
    * Any user supplied metadata for the asset
    */
    'metadata'?: { [key: string]: object; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "kind",
            "baseName": "kind",
            "type": "Kind"
        },
        {
            "name": "file",
            "baseName": "file",
            "type": "AssetFile"
        },
        {
            "name": "formats",
            "baseName": "formats",
            "type": "Array<Asset>"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: object; }"
        }    ];

    static getAttributeTypeMap() {
        return AssetUpdate.attributeTypeMap;
    }
}

