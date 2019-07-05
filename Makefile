install:
	npm install
start:
	npx babel-node src/bin/games/brain-gcd.js
pub:
	sudo npm publish --dry-run
lint:
	npx eslint *