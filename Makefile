install:
	npm install
start:
	npx babel-node src/bin/brain-calc.js
pub:
	sudo npm publish --dry-run
lint:
	npx eslint *