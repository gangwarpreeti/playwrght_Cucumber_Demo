const env = {
    'env': process.env.E2E_ENV || 'int-g1ds',

    'int-g1ds': {
        'web': {
          'HOST_URL': 'https://taxmon-ui.wal.int.az.eu.mediaecosystem.io/overview',
          // 'HOST_URL':'https://platform.wal.int.az.eu.mediaecosystem.io/',
        },
        'api': {
          // 'REST_API_ENDPOINT': 'http://ds-taxonomy01-int-g1ds-dan-taxonomy-svc-me.ds-taxonomy01-int-g1ds.svc.cluster.local',
          // 'TXG_API_ENDPOINT':'http://ds-taxonomy01-int-g1ds-dan-txg-svc-me.ds-taxonomy01-int-g1ds.svc.cluster.local'
        },
      },

    'stg-g1ds': {
        'web': {
          'HOST_URL': 'https://taxmon-ui.wal.stg.az.eu.mediaecosystem.io/overview',
          // 'HOST_URL':'https://platform.wal.stg.az.eu.mediaecosystem.io/',
        },
        'api': {
          // 'REST_API_ENDPOINT': 'http://ds-taxonomy01-stg-g1ds-dan-taxonomy-svc-me.ds-taxonomy01-stg-g1ds.svc.cluster.local',
          // 'TXG_API_ENDPOINT':'http://ds-taxonomy01-stg-g1ds-dan-txg-svc-me.ds-taxonomy01-stg-g1ds.svc.cluster.local'
        },
      },
};

module.exports=env;