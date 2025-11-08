'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

      await queryInterface.createTable('user_table',{
      user_id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:Sequelize.INTEGER
      },
      user_email:{
        allowNull:false,
        type:Sequelize.STRING(100),
        unique:true
      },
      user_password:{
        allowNull:false,
        type:Sequelize.STRING(255),
      },
      user_org_pass:{
        allowNull:false,
        type:Sequelize.STRING(255)
      },
      user_name:{
        type:Sequelize.STRING(255)
      },
      user_phoneno:{
        type:Sequelize.STRING(20),
        unique: true
      },
      user_isactive:{
        allowNull:false,
        type:Sequelize.BOOLEAN,
        defaultValue:true
      },
      user_picture:{
        allowNull:true,
        type:Sequelize.STRING,
        defaultValue:null
      },
      created_at:{
        allowNull:false,
        type:Sequelize.DATE
      },
      updated_at:{
        allowNull:false,
        type:Sequelize.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
