describe('Mikro-Frontend Kullanıcı Yolculuğu', () => {
  it('Shell, Ethic ve paylaşılan statein doğru çalışmasını test eder', () => {
    // 1. Ana sayfayı ziyaret et
    cy.visit('http://localhost:3000');

    // 2. Shell'deki başlığın ve sayacın başlangıç değerinin doğru olduğunu doğrula
    cy.contains('h1', 'Ana Uygulama (Shell) - Sayaç: 0');

    // 3. Header'daki "Ethic" linkine tıkla
    cy.contains('a', 'Ethic').click();

    // 4. URL'in doğru değiştiğini doğrula
    cy.url().should('include', '/ethic');

    // 5. Ethic MFE'sinin başlığının ekrana geldiğini doğrula
    cy.contains('h2', 'Burası "Ethic" Mikro Uygulaması');

    // 6. Asenkron olarak yüklenen ürünlerin listelendiğini doğrula
    cy.contains('li', 'Laptop', { timeout: 5000 });
    cy.contains('li', 'Klavye');
    cy.contains('li', 'Mouse');

    // 7. Ethic MFE'sindeki butona tıklayarak Redux state'ini değiştir
    cy.contains('button', "Shell'deki Sayacı Azalt").click();

    // 8. Shell'deki sayacın güncellendiğini doğrula
    cy.contains('h1', 'Ana Uygulama (Shell) - Sayaç: -1');
  });
});