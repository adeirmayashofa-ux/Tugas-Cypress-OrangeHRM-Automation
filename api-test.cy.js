describe('API automation', () => {

  it('TC-001-Cek semua daftar kategori', () => {
    cy.request('https://api.escuelajs.co/api/v1/categories')
      .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');
            expect(response.body.length).to.be.greaterThan(0);
        });
    });

    it('TC-002-Cek data kategori by Id 1', () => {
    cy.request('https://api.escuelajs.co/api/v1/categories/1')
      .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.id).to.eq(1);
            expect(response.body.name).to.not.be.empty;
        });
  });

    it('TC-003-Cek kategori by slug: shoes', () => {
    cy.request('https://api.escuelajs.co/api/v1/categories/slug/shoes')
      .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.name.toLowerCase()).to.eq('shoes');
            expect(response.body).to.have.property('id');
        });
    });  

    it('TC-004-Berhasil membuat kategori baru', () => {
        const dataBaru = {
        name: 'Makanan',
        image: 'https://placeimg.com/640/480/any'
    };
    cy.request('POST', 'https://api.escuelajs.co/api/v1/categories/', dataBaru)
      .then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.name).to.eq('Makanan');
            expect(response.body).to.have.property('id');
            cy.log('ID kategori baru adalah: ' + response.body.id);
        });
    });
    
    it('TC-005-Berhasil membuat kategori baru', () => {
        const dataBaru = {
        name: 'Minuman',
        image: 'https://placeimg.com/640/480/any'
    };
    cy.request('POST', 'https://api.escuelajs.co/api/v1/categories/', dataBaru)
      .then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.name).to.eq('Minuman');
            expect(response.body).to.have.property('id');
            cy.log('ID kategori baru adalah: ' + response.body.id);
        });
    });
    

    it('TC-006-Berhasil update nama kategori', () => {
        const dataBaru = {
        name: 'Elektronik Canggih'
    };
    cy.request('PUT', 'https://api.escuelajs.co/api/v1/categories/1', dataBaru)
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.name).to.eq('Elektronik Canggih');
        });
    });
    

    it('TC-007-Berhasil menghapus kategori', () => {
        const idYangDihapus = 10;
    cy.request('DELETE', `https://api.escuelajs.co/api/v1/categories/${idYangDihapus}`)
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.eq(true);
        });
    });
});




 

