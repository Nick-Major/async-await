import GameSavingLoader from "../src/GameSavingLoader.js";

test ('receiving correct object test', async () => {
    let result = await GameSavingLoader.load();

    expect(result).toEqual({
        id: 9,
        created: 1546300800,
        userInfo: {
            id: 1,
            name: 'Hitman',
            level: 10,
            points: 2000,
        },
    });
});

test('error ejection test', async () => {
    try {
      await GameSavingLoader.load('some-file.json');
    } catch (error) {
      await expect(GameSavingLoader.load()).rejects.toThrow(new Error(error.message));
    }
});
