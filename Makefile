install:
	npm install
start:
	npx babel-node src/bin/brain-prime.js
publish:
	sudo npm publish --dry-run
lint:
	npx eslint .
	