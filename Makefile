install:
	npm install
start:
	npx babel-node src/bin/games/brain-progression.js
pub:
	sudo npm publish --dry-run
lint:
	npx eslint *