import { Selector, ClientFunction } from 'testcafe'

require('dotenv').config()

const env = process.env

fixture `Auto like`
  .page `https://jp.finalfantasyxiv.com/lodestone/account/login`

test('auto like start', async t => {
  const idInput = Selector('#sqexid')
  const passwordInput = Selector('#password')
  const loginButton = Selector('#view-loginArea > a')
  const onePass = Selector('#otppw')

  await t
    .typeText(idInput, env.USER_ID)
    .typeText(passwordInput, env.PASSWORD)
    .click(loginButton)
    .typeText(onePass, env.ONE_PASSWORD)
    .click(loginButton)

  const characters = Selector('.entry')

  await t
    .click(characters.nth(1))
    .navigateTo('https://jp.finalfantasyxiv.com/lodestone/blog')

  const blogs = await Selector('.entry__block__wrapper > .entry__blog_block')
  const blogsCount = await blogs.count
  const goBack = ClientFunction(() => window.history.back())

  for(let i=0; i<blogsCount; i++){
    await t
    .click(blogs.nth(i).child().find('.entry__blog_block__box'))

    const likeButton = Selector('.blog__area__like__bt_like')
    if (await likeButton.visible) {
      await t
        .click(likeButton)
    }
    await goBack()
  }
})