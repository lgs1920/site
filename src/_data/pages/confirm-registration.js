const confirmRegistration = {
    layout:        'layouts/minimal-page.html',
    minimalChrome: true,
    requiresBackend:true,
    pageClass:     'registration-confirm-page',
    path:          '/registration/confirm/',
    en: {
        title:       'Confirm your LGS1920 Studio launch registration',
        description: 'Confirm your email address to complete your LGS1920 Studio launch registration.',
        hero: {
            video: false,
            badge:  'Registration',
            kicker: 'Launch registration',
            title:  'Confirm your registration',
            lead:   'Use the link from your confirmation email to complete your LGS1920 Studio launch registration.',
        },
        panel: {
            eyebrow: 'Registration status',
            title:   'Confirmation',
        },
        loading: 'Checking your confirmation link…',
        emailLabel: 'Email address:',
        successTitle: 'Your registration is confirmed. Thank you!',
        successMessage: 'Your email address has been confirmed for LGS1920 Studio launch updates.',
        invalidTitle: 'This confirmation link is no longer valid.',
        invalidMessage: 'It may have already been used or may have expired. You can close this page.',
    },
    fr: {
        title:       'Confirmer votre inscription au lancement de LGS1920 Studio',
        description: 'Confirmez votre adresse e-mail pour finaliser votre inscription au lancement de LGS1920 Studio.',
        hero: {
            video: false,
            badge:  'Inscription',
            kicker: 'Lancement du Studio',
            title:  'Confirmer votre inscription',
            lead:   'Utilisez le lien reçu par e-mail pour finaliser votre inscription au lancement de LGS1920 Studio.',
        },
        panel: {
            eyebrow: 'État de l’inscription',
            title:   'Confirmation',
        },
        loading: 'Vérification de votre lien de confirmation…',
        emailLabel: 'Adresse e-mail :',
        successTitle: 'Votre inscription est confirmée. Merci !',
        successMessage: 'Votre adresse e-mail est confirmée pour recevoir les informations sur le lancement de LGS1920 Studio.',
        invalidTitle: 'Ce lien de confirmation n’est plus valide.',
        invalidMessage: 'Il a peut-être déjà été utilisé ou a expiré. Vous pouvez fermer cette page.',
    },
}

export default confirmRegistration
