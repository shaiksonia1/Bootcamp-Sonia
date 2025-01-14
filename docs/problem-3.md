# Clinical Trial Data Widget Project

## Problem Definition
Clinical trial data is crucial for researchers, healthcare professionals, and patients looking for treatment options. However, accessing and visualizing this data efficiently is a challenge. ClinicalTrials.gov provides raw data, but a more user-friendly and interactive interface is needed. The goal of this project is to develop a reusable widget that displays clinical trial data from public APIs in an intuitive and informative way.

## Users
- **Researchers & Clinicians:** Need to explore trials related to specific diseases and interventions.
- **Patients & Advocacy Groups:** Want to find relevant trials and understand their status.
- **Developers & Data Scientists:** Require a structured way to integrate and analyze clinical trial data.

### Usage
Users will interact with a table displaying clinical trial data. They can:
- Search for trials by condition (e.g., asthma, hydrogenitis operativa).
- Filter and sort results based on criteria such as trial status, date posted, and phase.
- View essential trial details, with links to ClinicalTrials.gov for more information.
- (Future) Access additional insights such as drug interactions, mechanisms of action, and target proteins.

## Plan
### Phase 1: Core Table Development
1. **API Integration:** Retrieve clinical trial data from ClinicalTrials.gov (RESTful API).
2. **Table Construction:** Display key trial details in a structured table format.
3. **User Interactions:** Implement sorting and filtering for:
   - Trial status (Recruiting, Completed, etc.)
   - Date posted (e.g., 2021-2023)
   - Phase (e.g., Phase 2) *(Missing feature, needs implementation)*
4. **UX Enhancements:**
   - Sticky headers (Study Title remains fixed during horizontal scrolling)
   - Interactive elements (e.g., expandable rows, tooltips)
5. **Testing & Optimization:** Ensure API performance, validate filtering, and refine UI/UX.

### Phase 2: Data Enrichment with Open Targets
1. **GraphQL API Integration:** Retrieve additional drug-related data from Open Targets.
2. **Data Expansion:** Add three columns to the table:
   - **Target:** Gene/protein the drug interacts with.
   - **Modality:** Drug type (e.g., small molecule, biologic).
   - **Mechanism of Action (MOA):** How the drug functions.
3. **Seamless Integration:** Map drug names from ClinicalTrials.gov to Open Targets data.
4. **Testing & Refinement:** Ensure the new data enhances usability and does not overload the interface.

## Exit Criteria
The project is considered complete when:
1. The core table displays clinical trial data with filtering and sorting functionality.
2. Users can interact intuitively with the widget (e.g., clicking study titles to visit ClinicalTrials.gov).
3. Sticky headers are implemented successfully for better navigation.
4. (Future) Open Targets data is integrated, adding additional insights without performance issues.
5. The widget can be embedded into other projects with minimal configuration.

## Project Deliverables
- **Executable Widget:** A fully functional web component that can be embedded in various platforms.
- **API Documentation:** Clear instructions on how the widget interacts with ClinicalTrials.gov and Open Targets.
- **User Guide:** Instructions for researchers, developers, and healthcare professionals on how to use the widget.
- **Code Repository:** Open-source code with setup instructions, making it easy for contributors to extend functionality.
- **Demo Page:** A live preview demonstrating the widget’s features and interactions.

By following this structured approach, the project will create a valuable, reusable tool that simplifies access to clinical trial data and enhances decision-making for various stakeholders.

