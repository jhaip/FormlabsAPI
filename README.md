# Formlabs SDK

Client libraries and demo code for the Formlabs API.

API endpoint documentation is available in the [api-documentation.html](api-documentation.html) file.

## Integration Overview

All PreForm SDK integrations involve starting the PreFormServer background application to expose the HTTP API and then making HTTP API calls in your own code. Formlabs provides an example Python library that handles the setup and request formatting, but integrations in other languages can be made by following the same pattern:

1. Run the PreFormServer application in the background. This creates a HTTP Server interface for PreForm running on localhost port 44388 by default.
2. Write code that makes HTTP calls to the endpoints. Endpoints and parameters are described in the openapi.yaml specification and the htmldocs folder. There are many public tools to automatically generate libraries in your choice of programming language based on the Formlabs provided by openapi.yaml.

> [!NOTE]
> The HTTP Server that PreForm uses to communicate is only exposed to the local network of your computer and not to the public Internet, unless you have configured your computer to expose the port running the PreForm Server to the Internet.


## Installing PreFormServer

PreFormServer executables are available for each platform is available for MacOS, Windows, and Linux on the [Github Releases page](https://github.com/Formlabs/Formlabs-SDK/releases).

Download the .zip folder for your operating system, unzip it, and then move the PreFormServer executable to the folder where you want it to be installed.

### MacOS Permissions

If a PreFormServer application is downloaded from your browser, then it will probably be blocked from running by the MacOS security checks. You can resolve this security check by:

1. Running a command from your terminal to remove the security check

```
cd path/to/your/PreFormServer.app
xattr -r -d com.apple.quarantine PreFormServer.app
```

2. Manually opening and running the PreFormServer app

Locate the PreFormServer application in the Finder. Right click it and select "Open". You should see a MacOS security check like `"PreFormServer" cannot be opened because the developer cannot be verified". Click "Cancel" and then repeat the process of right clicking the application and selecting "Open". The second time you should be given the open to "Open" the application - select that. The server will start and exit without opening any window. The security check should now be resolved.

## Generating Client Libraries and Documentation from OpenAPI Spec

All these examples work on the example `openapi.yaml` OpenAPI 3.0 Description of the Formlabs HTTP REST API.

### Generate Web HTTP API Documentation

```
npx @redocly/cli build-docs -o api-documentation.html openapi.yml
```

### Generate Python library

```bash
brew install openapi-generator

openapi-generator generate -i openapi.yml -g python -o ./python/pythonlib -c ./python/gen-config.yaml
```

### Generate JavaScript Library

```bash
brew install openapi-generator

openapi-generator generate -i openapi.yml -g javascript -o ./js/jslib -c ./js/gen-config.yaml
```
