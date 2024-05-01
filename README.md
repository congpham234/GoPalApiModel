# Smithy to OpenAPI Template
Convert the quickstart guide Smithy model into the [OpenAPI](https://spec.openapis.org/oas/latest.html) format.

## Build
To build the models in this project run: 
```console
smithy build
```
From the root of this template directory.

The resulting OpenAPI specification can be found in the `build` directory 
created by the command above in the `smithy/source/openapi` directory.


----

1. run this to activate the commands
```npm link```

2. run this to generate openapi-spec.json
```
generate-open-api-doc
```

3. generate api models:
```
generate-api-models
```


4. to publish to npm:
```npm publish --access=public```


5. Change version:
npm version 1.0.11