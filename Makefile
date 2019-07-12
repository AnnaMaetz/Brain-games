install:
	npm install
start:
	npx babel-node src/bin/brain-even.js
publish:
	sudo npm publish --dry-run
lint:
	npx eslint .
	