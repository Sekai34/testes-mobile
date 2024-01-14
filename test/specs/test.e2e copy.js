describe ('Primeiro teste', () =>{
    it('acessar o menu forms', async () => {
        await $('~Forms').click()
        await $('android=new UiSelector().text("cancel").className("android.widget.Button")').waitforExist({timeout: 20000} ),
        await $('~text-imput').setValue('teste')
        expect(await $('text-input')).toBeDisplayed()

    });
});

