import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class MonarchinitiativeApi implements ICredentialType {
        name = 'N8nDevMonarchinitiativeApi';

        displayName = 'Monarchinitiative API';

        icon: Icon = { light: 'file:../nodes/Monarchinitiative/monarchinitiative.svg', dark: 'file:../nodes/Monarchinitiative/monarchinitiative.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '/api',
                        required: true,
                        placeholder: '/api',
                        description: 'The base URL of your Monarchinitiative API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
