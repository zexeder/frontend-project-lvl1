install:
	npm install

start:
	npx node bin/brain-gdc.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
