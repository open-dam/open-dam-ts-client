.PHONY: build test

gen:
	docker run -v ${PWD}:/open-dam  openapitools/openapi-generator-cli generate -i https://raw.githubusercontent.com/open-dam/open-dam-api/master/api/openapi.yaml?token=AAFBO7SEHL2EO2EHECKUEYC6YQDK4 -g typescript-node -o /open-dam/ --git-user-id open-dam --git-repo-id open-dam-api --additional-properties=npmName=@open-dam/open-dam-api,npmVersion=1.0.0

gen-docs:
	# Requrires [Redoc](https://github.com/Redocly/redoc) 
	# `npm install redoc-cli -g --save`
	redoc-cli bundle api/openapi.yaml -o docs/index.html --options.disableSearch --options.hideDownloadButton

build:
	npm install
	npm run build

test:
	npm run test
