import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "fennel-language-server" is now active!');

	let disposable = vscode.commands.registerCommand('fennel-language-server.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from fennel-language-server!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
