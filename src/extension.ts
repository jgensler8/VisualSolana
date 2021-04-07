import * as vscode from 'vscode';
import { VSolEditorProvider } from './vsolEditor';

export function activate(context: vscode.ExtensionContext) {
	// Register our custom editor providers
	context.subscriptions.push(VSolEditorProvider.register(context));
}
