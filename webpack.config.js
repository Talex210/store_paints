const path = require('path');

module.exports = {
    entry: './src/js/main.js', // Точка входа JavaScript
    output: {
        filename: 'bundle.js', // Итоговый файл бандла
        path: path.resolve(__dirname, 'dist'), // Папка для выходных файлов
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'), // Откуда брать статические файлы
        },
        compress: true, // Включить gzip-сжатие
        port: 9000, // Порт разработки
        hot: true, // Горячая перезагрузка (Hot Module Replacement)
    },
    module: {
        rules: [
            {
                test: /\.scss$/, // Применять правило к SCSS файлам
                use: [
                    'style-loader', // Инжектит CSS в DOM
                    'css-loader',   // Преобразует CSS в CommonJS
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('autoprefixer') // Добавляем автопрефиксер
                                ]
                            }
                        }
                    },
                    'sass-loader'   // Компилирует Sass в CSS
                ]
            }
        ]
    }
};
