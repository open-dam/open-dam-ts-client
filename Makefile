.PHONY: build test

gen:
	docker run -v ${PWD}:/open-dam  openapitools/openapi-generator-cli generate -i https://raw.githubusercontent.com/open-dam/open-dam-api/master/api/openapi.yaml -g typescript-node -o /open-dam/ --git-user-id open-dam --git-repo-id open-dam-ts-client --additional-properties=npmName=@open-dam/open-dam-ts-client,npmVersion=1.0.0

build:
	npm install
	npm run build

test:
	npm run test
