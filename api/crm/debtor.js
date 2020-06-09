const Debtor =[
    {
      'uuid': '65a6eb21-67b5-45c3-9af7-faca2d9b60d4',
      'name': 'Horácio Andre',
      'email': 'Horacio98@gmail.com',
      'username': 'Dessie79',
      'jobTitle': 'Tecnico',
      'phone': '866255455',
      'avatar': require('@/assets/avatar/a1.jpg'),
      'address': {
        'street': '655 Archibald Groves',
        'suite': 'Apt. 818',
        'city': 'Carlosshire',
        'state': 'Arkansas',
        'country': 'Somalia',
        'zipcode': '10406',
        'geo': {
          'lat': '-44.6063',
          'lng': '-169.7706'
        }
      },
      'prestacao':11500,
      'saldo':34600
    },
    {
      'uuid': '28d9f265-74d7-4f85-83d4-6a21fca57dcf',
      'name': 'Armando Jaime',
      'jobTitle': 'Actor',
      'email': 'Nacir_Armando@yahoo.com',
      'username': 'Jakayla_Crooks86',
      'phone': '866255455',
      'avatar': require('@/assets/avatar/a2.jpg'),
      'address': {
        'street': '281 Tillman Forge',
        'suite': 'Apt. 381',
        'city': 'New Sandrinemouth',
        'state': 'North Dakota',
        'country': 'Reunion',
        'zipcode': '19540-8186',
        'geo': {
          'lat': '-12.3375',
          'lng': '-117.9067'
        }
      },
      'prestacao':5500,
      'saldo':50600
    },
    {
      'uuid': '14ddae1e-986d-42f4-8d17-46a02d469b2b',
      'name': 'Daúde Razaque',
      'jobTitle': 'Treinador',
      'email': 'Daude.Razaque@hotmail.com',
      'username': 'Hobart_Mueller',
      'phone': '866255455',
      'avatar': require('@/assets/avatar/a3.jpg'),
      'address': {
        'street': '706 Padberg Knoll',
        'suite': 'Suite 818',
        'city': 'Port Mablefurt',
        'state': 'Arkansas',
        'country': 'Netherlands Antilles',
        'zipcode': '89975-6584',
        'geo': {
          'lat': '-42.9187',
          'lng': '8.5866'
        }
      },
      'prestacao':4500,
      'saldo':12000
    },
    {
      'uuid': '6a03248b-1752-4332-a3a9-7108528cc9d3',
      'name': 'Marcelino Jaime',
      'jobTitle': 'Tecnico',
      'email': 'Akil.Marcelino@hotmail.com',
      'username': 'Celestine.Casper',
      'phone': '866255455',
      'avatar': require('@/assets/avatar/a4.jpg'),
      'address': {
        'street': '9528 Schroeder Track',
        'suite': 'Apt. 443',
        'city': 'Godfreyburgh',
        'state': 'Montana',
        'country': 'Slovenia',
        'zipcode': '10220',
        'geo': {
          'lat': '36.8638',
          'lng': '20.0047'
        }
      },
      'prestacao':10000,
      'saldo':6000
    },
    {
      'uuid': 'ee272550-36e8-4fe2-889d-c1ee701c5863',
      'name': 'Jonas Adriel',
      'email': 'Antero.Cambaco@yahoo.com',
      'jobTitle': 'Informatico',
      'username': 'Hortense99',
      'phone': '849535156',
      'avatar': require('@/assets/avatar/a5.jpg'),
      'address': {
        'street': '9046 Allen Ferry',
        'suite': 'Suite 429',
        'city': 'Angushaven',
        'state': 'Michigan',
        'country': 'Costa Rica',
        'zipcode': '92378-7065',
        'geo': {
          'lat': '78.1292',
          'lng': '-134.6632'
        }
      },
      'prestacao':4000,
      'saldo':60000
    }
  ];
  
  const getDebtorById = (uuid) => {
    return (uuid === undefined) ? Debtor[0] : Debtor.find(x => x.uuid === uuid);
  };
  
  const getDebtor = (limit) => {
    return (limit) ? Debtor.slice(0, limit) : Debtor;
  };
  
  export {
    Debtor,
    getDebtor,
    getDebtorById
  };
  