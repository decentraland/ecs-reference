[Home](./index) &gt; [decentraland-ecs](./decentraland-ecs.md) &gt; [Material](./decentraland-ecs.material.md)

# Material class

## Properties

|  Property | Access Modifier | Type | Description |
|  --- | --- | --- | --- |
|  [`albedoColor`](./decentraland-ecs.material.albedocolor.md) |  | `Color3` | AKA Diffuse Color in other nomenclature. Defaults to \#CCCCCC. |
|  [`albedoTexture`](./decentraland-ecs.material.albedotexture.md) |  | `Texture` | Texture applied as material. |
|  [`alpha`](./decentraland-ecs.material.alpha.md) |  | `number` | Opacity level between 0 and 1. Defaults to 1. |
|  [`alphaTexture`](./decentraland-ecs.material.alphatexture.md) |  | `Texture` | Texture applied as opacity. Default: the same texture used in albedoTexture. |
|  [`ambientColor`](./decentraland-ecs.material.ambientcolor.md) |  | `Color3` | AKA Diffuse Color in other nomenclature. Defaults to black. |
|  [`bumpTexture`](./decentraland-ecs.material.bumptexture.md) |  | `Texture` | Stores surface normal data used to displace a mesh in a texture. |
|  [`directIntensity`](./decentraland-ecs.material.directintensity.md) |  | `number` | Intensity of the direct lights e.g. the four lights available in scene. This impacts both the direct diffuse and specular highlights. Defaults to 1. |
|  [`disableLighting`](./decentraland-ecs.material.disablelighting.md) |  | `boolean` | If sets to true, disables all the lights affecting the material. Defaults to false. |
|  [`emissiveColor`](./decentraland-ecs.material.emissivecolor.md) |  | `Color3` | The color emitted from the material. Defaults to black. |
|  [`emissiveIntensity`](./decentraland-ecs.material.emissiveintensity.md) |  | `number` | Intensity of the emissive part of the material. This helps controlling the emissive effect without modifying the emissive color. Defaults to 1. |
|  [`emissiveTexture`](./decentraland-ecs.material.emissivetexture.md) |  | `Texture` | Emissive texture. |
|  [`environmentIntensity`](./decentraland-ecs.material.environmentintensity.md) |  | `number` | Intensity of the environment e.g. how much the environment will light the object either through harmonics for rough material or through the refelction for shiny ones. Defaults to 1. |
|  [`hasAlpha`](./decentraland-ecs.material.hasalpha.md) |  | `boolean` | Does the albedo texture has alpha? Defaults to false. |
|  [`metallic`](./decentraland-ecs.material.metallic.md) |  | `number` | Specifies the metallic scalar of the metallic/roughness workflow. Can also be used to scale the metalness values of the metallic texture. Defaults to 0.5. |
|  [`microSurface`](./decentraland-ecs.material.microsurface.md) |  | `number` | AKA Glossiness in other nomenclature. Defaults to 1. |
|  [`reflectionColor`](./decentraland-ecs.material.reflectioncolor.md) |  | `Color3` | The color reflected from the material. Defaults to white. |
|  [`reflectivityColor`](./decentraland-ecs.material.reflectivitycolor.md) |  | `Color3` | AKA Specular Color in other nomenclature. Defaults to white. |
|  [`refractionTexture`](./decentraland-ecs.material.refractiontexture.md) |  | `Texture` | Stores the refracted light information in a texture. |
|  [`roughness`](./decentraland-ecs.material.roughness.md) |  | `number` | Specifies the roughness scalar of the metallic/roughness workflow. Can also be used to scale the roughness values of the metallic texture. Defaults to 0.5. |
|  [`specularIntensity`](./decentraland-ecs.material.specularintensity.md) |  | `number` | This is a special control allowing the reduction of the specular highlights coming from the four lights of the scene. Those highlights may not be needed in full environment lighting. Defaults to 1. |
|  [`transparencyMode`](./decentraland-ecs.material.transparencymode.md) |  | `number` | Sets the transparency mode of the material. Defauts to 0.<p/>\| Value \| Type \| \| \-\-\--- \| \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\--- \| \| 0 \| OPAQUE (default) \| \| 1 \| ALPHATEST \| \| 2 \| ALPHABLEND \| \| 3 \| ALPHATESTANDBLEND \| |

