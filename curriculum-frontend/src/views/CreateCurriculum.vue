<template>
  <v-row no-gutters class="upsert-curriculum-page">
    <v-col
    md="6"
    offset-md="3"
    sm="8"
    offset-sm="2"
    >

      <div class="page-header">
        <h1>Create Curriculum</h1>
        <v-btn>Save</v-btn>
      </div>

      <v-form class="upsert-form">
        <v-row>
          <v-col cols="3">
            <v-subheader>Name</v-subheader>
          </v-col>
          <v-col cols="9">
            <v-text-field/>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-subheader>Goals</v-subheader>
          </v-col>
          <v-col cols="9">
            <v-text-field/>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-label>Description</v-label>
            <v-textarea solo name="description"></v-textarea>
          </v-col>
        </v-row>
        <v-row >
          <v-col cols="12">
            <div class="curriculum-list">
              <v-card outlined>
                <v-card-title class="headline">My curriculum #1</v-card-title> 
                <v-card-text>
                  <v-row no-gutters>
                    <v-col cols="3">
                      <v-subheader>Name</v-subheader>
                    </v-col>
                    <v-col cols="9">
                      <v-text-field/>
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="3">
                      <v-subheader>Goals</v-subheader>
                    </v-col>
                    <v-col cols="9">
                      <v-text-field/>
                    </v-col>
                  </v-row>
                  <v-card class="resource-card">
                    <v-card-text>
                      <v-row no-gutters>
                        <v-col cols="12">
                          <v-text-field
                            placeholder="Enter Resource link"
                          />
                        </v-col>
                      </v-row>
                      <v-row no-gutters>
                        <v-col cols="12">
                          <p>List of resources</p>
                          <p>List of resources</p>
                          <p>List of resources</p>
                        </v-col>
                      </v-row>
                    </v-card-text>  
                  </v-card>  
                  <v-card class="projects-card">
                    <v-card-text>
                      <v-row no-gutters>
                        <v-col cols="12">
                          <v-text-field
                            placeholder="Enter Project link"
                          />
                        </v-col>
                      </v-row>
                      <v-row no-gutters>
                        <v-col cols="12">
                          <p>List of Projects</p>
                          <p>List of Projects</p>
                          <p>List of Projects</p>
                        </v-col>
                      </v-row>
                    </v-card-text>  
                  </v-card>
                </v-card-text>
              </v-card>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-btn>Add Section</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-col>
  </v-row>
</template>
