async function testKeys(testApi, keyCodes) {
  testApi.dispatchKeyCode(keyCodes.KEY_DOWN);
  await testApi.waitTime(500);

  testApi.dispatchKeyCode(keyCodes.KEY_ENTER); // Нажимаем Enter
  await testApi.waitPageChange('movies'); // Ждем загрузки сцены movies
  await testApi.waitTime(1000 * 2); // Ждем 2 секунды

  // ...

  window.location.reload(); // Перезагружаемся
}




testKeys({
	dispatchKeyCode: () => {},
	waitTime: async () => {},
	waitPageChange: async () => {},
}, {
	KEY_ENTER: 13,
	KEY_DOWN: 14,
});
