'use strict';

module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.addColumn('Books', 'uid', {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: '123456',
        }),
    down: (queryInterface) => queryInterface.removeColumn('Books', 'uid'),
};
