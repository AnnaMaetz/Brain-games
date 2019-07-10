install:
	npm install
start:
	npx babel-node src/bin/games/brain-prime.js
pub:
	sudo npm publish --dry-run
lint:
	npx eslint ~/project1/frontend-project-lvl1/src/*