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
import { AssetFile } from './assetFile';
import { Version } from './version';

/**
* An asset is a single managed digital asset
*/
export class Asset {
    /**
    * The unique id of the asset
    */
    'assetId': string;
    /**
    * The kind of media
    */
    'kind': Asset.KindEnum;
    'version': Version;
    'file': AssetFile;
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
            "name": "assetId",
            "baseName": "asset_id",
            "type": "string"
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "Asset.KindEnum"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "Version"
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
        return Asset.attributeTypeMap;
    }
}

export namespace Asset {
    export enum KindEnum {
        Image = <any> 'image',
        Video = <any> 'video',
        Audio = <any> 'audio',
        Text = <any> 'text'
    }
}
