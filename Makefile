install:
	npm install
start:
	npx babel-node src/bin/brain-even.js
pub:
	sudo npm publish --dry-run
lint:
	npx eslint *