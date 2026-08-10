const revokeRegistration = {
    layout:        'layouts/minimal-page.html',
    minimalChrome: true,
    pageClass:     'registration-revoke-page',
    path:          '/registration/revoke/',
    en: {
        title:       'Cancel your LGS1920 Studio launch registration',
        description: 'Confirm the cancellation of your LGS1920 Studio launch registration.',
        hero: {
            video: false,
            badge:  'Registration',
            kicker: 'Launch registration',
            title:  'Cancel your registration',
            lead:   'You have requested cancellation of your LGS1920 Studio launch registration.',
        },
        panel: {
            eyebrow: 'Registration status',
            title:   'Cancellation',
        },
        loading: 'Checking your cancellation link…',
        emailLabel: 'Email address:',
        successTitle: 'Your registration has been cancelled.',
        successMessage: 'Your LGS1920 Studio launch registration has been removed successfully.',
        invalidTitle: 'This cancellation link is no longer valid.',
        invalidMessage: 'It may have already been used or may have expired. You can close this page.',
    },
    fr: {
        title:       'Annuler votre inscription au lancement de LGS1920 Studio',
        description: 'Confirmez l’annulation de votre inscription au lancement de LGS1920 Studio.',
        hero: {
            video: false,
            badge:  'Inscription',
            kicker: 'Lancement du Studio',
            title:  'Annuler votre inscription',
            lead:   'Vous avez demandé l’annulation de votre inscription au lancement de LGS1920 Studio.',
        },
        panel: {
            eyebrow: 'État de l’inscription',
            title:   'Annulation',
        },
        loading: 'Vérification de votre lien d’annulation…',
        emailLabel: 'Adresse e-mail :',
        successTitle: 'Votre inscription a été annulée.',
        successMessage: 'Votre inscription au lancement de LGS1920 Studio a bien été supprimée.',
        invalidTitle: 'Ce lien d’annulation n’est plus valide.',
        invalidMessage: 'Il a peut-être déjà été utilisé ou a expiré. Vous pouvez fermer cette page.',
    },
}

export default revokeRegistration
