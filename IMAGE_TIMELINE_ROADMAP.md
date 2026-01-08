# IMAGE CREATION TIMELINE & ROADMAP
## Visual Week-by-Week Implementation Plan

---

## EXECUTIVE TIMELINE

```
START (Day 0) ──────► MVP (Week 1) ──────► STRONG (Week 2) ──────► COMPLETE (Week 3)
     │                      │                       │                        │
  Prepare              6 images                 9 images                 11 images
     │                      │                       │                        │
  Approval             CAN LAUNCH              Professional            Full Portfolio
  Request                   │                       │                        │
     └──────────────────────┴───────────────────────┴────────────────────────┘
                              2-3 WEEK JOURNEY
```

**Key Milestone**: Week 1 MVP = Deployable website with 6 core images

---

## DAY 0 (TODAY): PREPARATION (2-3 hours)

### Morning (1 hour)
```
☐ Read IMAGE_CREATION_WORKFLOW.md (full context)
☐ Read IMAGE_QUICK_REFERENCE.md (at-a-glance guide)
☐ Review this timeline document
☐ Decide on approach: Full (11 images) vs MVP (6 images) vs Staged
```

### Afternoon (1-2 hours)
```
CRITICAL BLOCKER REMOVAL:
☐ Draft employer approval email (use template in Quick Reference)
☐ Send to JS SYSTEM management
☐ Set reminder to follow up in 3 days
☐ Expected wait time: 1-2 weeks

ASSET GATHERING:
☐ Locate Springer 2024 paper PDF (thermal calibration)
☐ Locate SENSORS 2020 paper PDF (respiration)
☐ Check if you have KAIS 2021 or ICROS 2020 papers (multi-view)
☐ Check if you have access to seismic data from UMD project

PROFILE PHOTO:
☐ Select best professional photo (graduation, conference, work ID)
☐ Or plan to take new photo tomorrow
```

**End of Day 0**: Approval requested, papers located, photo selected
**Time invested**: 2-3 hours
**Images complete**: 0/11 (but blockers removed!)

---

## WEEK 1: CRITICAL PATH (7-10 hours → 6 images)

### Goal: MVP Deployable Portfolio
**Strategy**: Complete all non-blocked images while waiting for approval

---

### Day 1 (Monday): Quick Wins (2 hours)

**Morning: Profile Photo (1 hour)**
```
☐ If using existing photo:
  ├─ Upload to remove.bg (https://remove.bg)
  ├─ Download PNG with transparent background
  ├─ Open in image editor (GIMP, Paint.NET, Photopea)
  ├─ Crop to square 400x400px
  ├─ Save as images/KimJuO.jpg
  └─ ✓ Image 1/11 complete!

☐ If taking new photo:
  ├─ Set up good lighting (near window, daytime)
  ├─ Plain background (wall)
  ├─ Professional attire
  ├─ Take 10-20 shots, select best
  └─ Process as above
```

**Afternoon: Paper Downloads (1 hour)**
```
☐ Download Springer 2024 paper:
  ├─ Search Google Scholar: "Calibrating Three-Viewpoints Thermal Camera"
  ├─ Download PDF from Springer or ResearchGate
  ├─ Save to data/ folder
  └─ ✓ Paper secured

☐ Download SENSORS 2020 paper:
  ├─ Search Google Scholar or MDPI: "Detection Abnormal Respiration"
  ├─ Download PDF (MDPI is open access, should be free)
  ├─ Save to data/ folder
  └─ ✓ Paper secured

☐ Locate domestic papers (optional):
  ├─ Check university library for KAIS 2021, ICROS 2020
  └─ Or skip for now (LOW priority)
```

**End of Day 1**: 1 image complete, papers secured
**Progress**: 1/11 (9%)

---

### Day 2 (Tuesday): Paper Figure Extraction (2 hours)

**Morning: Thermal Calibration (1 hour)**
```
☐ Open Springer 2024 paper PDF
☐ Locate figure showing calibration results (likely Figure 3 or 4)
☐ Extract "before calibration" portion:
  ├─ Use PDF screenshot tool or Snipping Tool
  ├─ Crop to show uncalibrated thermal image
  ├─ Open in image editor
  ├─ Resize to 160x160px (maintain aspect ratio, then crop)
  ├─ Adjust brightness/contrast if needed
  ├─ Save as images/thermal_calib_before.jpg
  └─ ✓ Image 2/11 complete!

☐ Extract "after calibration" portion:
  ├─ Same process
  ├─ Crop to show calibrated thermal image
  ├─ Resize to 160x160px
  ├─ Save as images/thermal_calib_after.jpg
  └─ ✓ Image 3/11 complete!

Troubleshooting:
  - If paper has low-quality figures: Contact Prof. Lee for originals
  - If can't access paper: Use ResearchGate or email yourself
```

**Afternoon: Respiration Signal (1 hour)**
```
☐ Open SENSORS 2020 paper PDF
☐ Locate figure showing UWB respiration signal (likely Figure 2)
☐ Extract signal visualization:
  ├─ Screenshot the respiration waveform
  ├─ Crop to cleanest signal representation
  ├─ Resize to 160x160px
  ├─ Save as images/respiration_before.jpg
  └─ ✓ Image 4/11 complete!

Alternative (if paper figure not suitable):
  ├─ Use bonus script: generate_portfolio_images.py
  ├─ It includes respiration signal generator
  └─ Or regenerate from Master's thesis data
```

**End of Day 2**: 4 images complete (1 photo + 3 paper extracts)
**Progress**: 4/11 (36%)

---

### Day 3 (Wednesday): Python Generation Setup (2 hours)

**Morning: Environment Setup (30 min)**
```
☐ Install Python dependencies:
  $ pip install matplotlib numpy scipy opencv-python pillow

☐ Verify installation:
  $ python -c "import matplotlib, numpy, scipy; print('OK')"

☐ Download generate_portfolio_images.py script (already in repo)
```

**Morning/Afternoon: Seismic Signal Generation (1.5 hours)**
```
☐ Option A: Use provided script (RECOMMENDED)
  ├─ Run: python generate_portfolio_images.py
  ├─ Review generated images in images/ folder
  ├─ Check seismic_before.jpg and seismic_after.jpg
  ├─ If satisfied, done!
  └─ ✓ Images 5-6/11 complete!

☐ Option B: Use real data (if available)
  ├─ Locate seismic data from UMD project (2023)
  ├─ Load in MATLAB or Python
  ├─ Plot raw signal with matplotlib
  ├─ Apply digital filter
  ├─ Plot filtered signal
  └─ Save both as 160x160px JPG

☐ Option C: Request data from Seongwoo Instruments
  ├─ Email former colleagues for sample data
  ├─ (May require approval, check employment agreement)
  └─ Fall back to Option A if blocked
```

**End of Day 3**: 6 images complete (MVP READY!)
**Progress**: 6/11 (55%)
**MILESTONE**: Can deploy website now!

---

### Day 4-5 (Thursday-Friday): MVP Review & Buffer

**Thursday: Quality Check (1 hour)**
```
☐ Review all 6 images:
  ├─ Check dimensions: all should be 160x160px
  ├─ Check file sizes: should be <500KB each
  ├─ Check clarity: readable at thumbnail size?
  ├─ Check filenames: match requirements exactly?
  └─ ✓ Quality verified

☐ Test images in HTML:
  ├─ Create simple HTML test page
  ├─ Add images with <img src="images/filename.jpg" width="160">
  ├─ Verify they look good
  └─ ✓ Integration tested

☐ Optional: Enhance if time permits
  ├─ Adjust colors, contrast
  ├─ Add annotations
  └─ Refine titles/labels
```

**Friday: Documentation & Backup**
```
☐ Document what you did:
  ├─ Which approach you used for each image
  ├─ Any issues encountered
  ├─ Sources of data/figures
  └─ Save notes for future reference

☐ Backup:
  ├─ Git commit images: git add images/ && git commit -m "Add 6 MVP images"
  └─ Or backup to cloud storage

☐ Check approval status:
  ├─ If no response, send friendly follow-up email
  └─ If approved, proceed to Week 3 early!
```

**End of Week 1**: MVP COMPLETE (6 images)
**Progress**: 6/11 (55%)
**Can deploy**: YES! Website is functional

---

## WEEK 2: ENHANCEMENT (5-7 hours → +3 images)

### Goal: Strong Professional Portfolio
**Strategy**: Add medium-priority images (non-proprietary)

---

### Day 6-7 (Monday-Tuesday): Multi-View Calibration (3 hours)

**Option A: Extract from Papers (1 hour)**
```
☐ If you have KAIS 2021 or ICROS 2020 papers:
  ├─ Locate figure showing multi-view geometry
  ├─ Extract and resize to 160x160px
  ├─ Save as images/multiview_calib.jpg
  └─ ✓ Image 7/11 complete!
```

**Option B: Recreate Diagram (3 hours)**
```
☐ Open Draw.io (https://draw.io) in browser
☐ Create new flowchart
☐ Add components:
  ├─ 3 camera shapes (search "camera" icon)
  ├─ Coordinate system indicators
  ├─ Transformation arrows
  └─ World reference frame

☐ Arrange geometrically:
  ├─ Show non-overlapping fields of view
  ├─ Label each camera (Cam 1, Cam 2, Cam 3)
  └─ Show extrinsic parameter relationships

☐ Export:
  ├─ File → Export as → JPEG
  ├─ Resolution: 800x800px
  ├─ Download and resize to 160x160px
  └─ Save as images/multiview_calib.jpg

☐ ✓ Image 7/11 complete!
```

**End of Day 7**: 7 images complete
**Progress**: 7/11 (64%)

---

### Day 8-9 (Wednesday-Thursday): Depth Camera (4 hours)

**Option A: Use Generated Script (30 min)**
```
☐ The generate_portfolio_images.py script already created these!
☐ Check images/depth_before.jpg and images/depth_after.jpg
☐ If they look good, just rename/use them
☐ ✓ Images 8-9/11 complete!
```

**Option B: Use Real Data (4 hours)**
```
☐ Locate NRF project depth camera data (2020-2022)
☐ Load raw depth maps
☐ Create visualization with OpenCV:

  import cv2
  import matplotlib.pyplot as plt

  # Load depth
  depth_raw = cv2.imread('raw_depth.png', cv2.IMREAD_UNCHANGED)
  depth_corrected = apply_dnn_calibration(depth_raw)

  # Visualize
  plt.imshow(depth_raw, cmap='jet')
  plt.savefig('images/depth_before.jpg')

  plt.imshow(depth_corrected, cmap='jet')
  plt.savefig('images/depth_after.jpg')

☐ ✓ Images 8-9/11 complete!
```

**End of Day 9**: 9 images complete
**Progress**: 9/11 (82%)
**MILESTONE**: Strong professional portfolio!

---

### Day 10 (Friday): Week 2 Buffer & Polish

```
☐ Review all 9 images
☐ Polish any rough edges
☐ Check approval status again
☐ Prepare for Week 3 if approval received
☐ Or: Deploy website with 9 images (still excellent!)
```

**End of Week 2**: STRONG PORTFOLIO (9 images)
**Progress**: 9/11 (82%)
**Can deploy**: YES! Very professional appearance

---

## WEEK 3: COMPLETION (10-15 hours → +2 images)

### Goal: Full Portfolio with Proprietary Projects
**Strategy**: Add APEX ML and Acoustic Vision (after approval)

---

### PREREQUISITE: Employer Approval Received ✓

**If approval NOT received by Week 3**:
```
Option 1: Deploy with 9 images (still great!)
Option 2: Use generic placeholder diagrams
Option 3: Continue waiting, deploy Week 4
```

**Assuming approval received**:

---

### Day 11-12 (Monday-Tuesday): APEX ML Architecture (5 hours)

**Monday Morning: Planning (1 hour)**
```
☐ Review approved description from employer
☐ Identify what CAN be shown:
  ├─ 3-phase pipeline (Explore-Optimize-Evolve)
  ├─ Key components (Ray, GPU cluster, Algorithm Factory)
  └─ Data flow (generic)

☐ Identify what CANNOT be shown:
  ├─ Specific algorithms (TabM, TabR, GANs)
  ├─ Performance metrics
  ├─ Proprietary data schemas
  └─ Customer information

☐ Sketch on paper first:
  └─ Draw rough layout of diagram
```

**Monday Afternoon - Tuesday: Design (4 hours)**
```
☐ Option A: Draw.io (RECOMMENDED)
  ├─ Open https://draw.io
  ├─ Choose "Flowchart" template
  ├─ Create high-level architecture:
     │
     └─ [Data Input]
         ├─ [Explore Phase]
         │   └─ [Ray Cluster]
         ├─ [Optimize Phase]
         │   └─ [GPU Pool (RTX 4090)]
         ├─ [Evolve Phase]
         │   └─ [Algorithm Factory]
         └─ [Output: Predictions + Insights]

  ├─ Style choices:
  │   ├─ Colors: Blue (data), Green (compute), Orange (output)
  │   ├─ Font: Arial, size 10-12
  │   └─ Arrows: Simple, clear flow
  │
  ├─ Export as JPG, 800x800px
  ├─ Resize to 160x160px
  └─ Save as images/apex_architecture.jpg

☐ Option B: Python diagrams library
  from diagrams import Diagram, Cluster
  from diagrams.onprem.compute import Server

  with Diagram("APEX ML Architecture", show=False):
      # ... create diagram programmatically

  # Resize output to 160x160px

☐ ✓ Image 10/11 complete!
```

**End of Day 12**: 10 images complete
**Progress**: 10/11 (91%)

---

### Day 13-15 (Wed-Fri): Acoustic Vision Concept (10 hours)

**Wednesday: Design Planning (2 hours)**
```
☐ Review approved description
☐ What to show:
  ├─ Microphone array (generic)
  ├─ Camera input (generic)
  ├─ Fusion concept (ROI beamforming)
  └─ Output visualization (heatmap overlay)

☐ What NOT to show:
  ├─ Specific beamforming algorithms (MVDR, MUSIC details)
  ├─ YOLOv8/MiDaS integration specifics
  ├─ Performance metrics
  └─ Client use cases

☐ Gather assets:
  ├─ Download free icons (microphone, camera) from flaticon.com
  ├─ Or use PowerPoint built-in icons
  └─ Prepare color scheme
```

**Thursday-Friday: Design Implementation (8 hours)**
```
☐ Option A: PowerPoint/Keynote (RECOMMENDED for visuals)
  ├─ Open PowerPoint, blank slide
  ├─ Design layout:
     │
     └─ Left side:
         ├─ Microphone array icon
         ├─ Label: "Audio Input"
         └─ Camera icon
         └─ Label: "Vision Input"

     └─ Center:
         └─ Fusion symbol (two arrows merging)
         └─ Label: "ROI Beamforming"

     └─ Right side:
         └─ Camera image with heatmap overlay
         └─ Label: "Sound Source Visualization"

     └─ Add arrows showing data flow →→→

  ├─ Create heatmap overlay:
  │   ├─ Use PowerPoint gradient fills
  │   ├─ Red/yellow = high sound, blue = low sound
  │   └─ Semi-transparent overlay on image
  │
  ├─ Polish:
  │   ├─ Align elements neatly
  │   ├─ Consistent fonts and colors
  │   └─ Professional appearance
  │
  ├─ Export as high-res JPG (File → Save As → JPEG)
  ├─ Resize to 160x160px
  └─ Save as images/acoustic_concept.jpg

☐ Option B: Canva (easier templates)
  ├─ Sign up for free Canva account
  ├─ Search templates: "technology concept diagram"
  ├─ Customize with your content
  ├─ Export as JPG
  └─ Resize and save

☐ Option C: Hire designer on Fiverr ($30-50)
  ├─ Provide sketch of desired layout
  ├─ 2-3 day turnaround
  └─ Professional result, saves 8 hours

☐ ✓ Image 11/11 complete!
```

**End of Day 15**: ALL 11 IMAGES COMPLETE!
**Progress**: 11/11 (100%)
**MILESTONE**: FULL PORTFOLIO READY! 🎉

---

## WEEK 3 ALTERNATIVE: Staged Deployment

**If approval delayed, use this staged approach**:

### Stage 1 (End of Week 1): Deploy MVP
- 6 images live
- 5 projects showcased
- Omit APEX ML and Acoustic Vision entries

### Stage 2 (End of Week 2): Deploy Strong Version
- 9 images live
- 6-7 projects showcased
- Still omit proprietary projects

### Stage 3 (When approval received): Deploy Full Version
- 11 images live
- All 7 projects showcased
- Complete portfolio

**This approach**: Website live in Week 1, enhanced incrementally

---

## RISK MITIGATION TIMELINE

### If Employer Approval Denied

**Week 3 Alternative Activities** (instead of proprietary images):

**Option 1: Generic Placeholders (3 hours)**
```
☐ Create "Distributed ML Architecture" diagram
  └─ Generic ML pipeline, not APEX ML specific

☐ Create "Acoustic Beamforming Concept" diagram
  └─ Textbook beamforming, not your specific system

☐ Add disclaimer in HTML:
  └─ "Representative system architecture" or "Conceptual approach"
```

**Option 2: Enhance Existing Images (3 hours)**
```
☐ Add animations to existing images
  └─ Respiration signal animation (matplotlib.animation)
  └─ Seismic signal animation showing filter in action

☐ Create higher quality versions
  └─ Regenerate with better data
  └─ Add professional annotations
```

**Option 3: Add Bonus Project (5 hours)**
```
☐ Add entry for domestic publication (KAIS 2021)
☐ Create visualization for that work
☐ Still have 10-11 total images
```

---

## DAILY TIME COMMITMENT

**Intensive Approach** (complete in 3 weeks):
- Week 1: 2 hours/day × 5 days = 10 hours
- Week 2: 1-2 hours/day × 5 days = 7 hours
- Week 3: 2-3 hours/day × 5 days = 12 hours
- **Total**: 29 hours over 3 weeks

**Relaxed Approach** (complete in 4-5 weeks):
- 1 hour/day on weekdays
- 3-4 hours on weekends
- More sustainable, same result

**Sprint Approach** (complete in 1 week):
- Full-time focus for one week
- Day 1-2: MVP (6 images)
- Day 3-4: Enhancement (9 images)
- Day 5: Wait for approval or use placeholders
- **Only possible if**: Week off work, data readily available, no approval needed

---

## PROGRESS TRACKING

Use this chart to track your progress:

```
Week 1: MVP (6 images)
[ ] Day 1: Profile photo + Paper downloads
[ ] Day 2: Thermal + Respiration extractions (3 images)
[ ] Day 3: Seismic generation (2 images)
[ ] Day 4-5: Review and polish
└─> CHECKPOINT: Can deploy MVP

Week 2: Enhancement (9 images)
[ ] Day 6-7: Multi-view calibration (1 image)
[ ] Day 8-9: Depth camera (2 images)
[ ] Day 10: Review and polish
└─> CHECKPOINT: Can deploy strong portfolio

Week 3: Completion (11 images)
[ ] Day 11-12: APEX ML architecture (1 image)
[ ] Day 13-15: Acoustic Vision concept (1 image)
└─> CHECKPOINT: Full portfolio complete!

Deployment:
[ ] All images verified (160x160px, <500KB, correct names)
[ ] Images added to index.html
[ ] Local testing complete
[ ] Git commit and push
[ ] GitHub Pages deployment verified
[ ] Mobile/desktop testing
└─> WEBSITE LIVE! 🎉
```

---

## SUCCESS METRICS BY WEEK

### Week 1 Success
- ✓ 6 images created
- ✓ Profile photo ready
- ✓ All published papers represented
- ✓ MVP deployable
- **Result**: Functional academic portfolio

### Week 2 Success
- ✓ 9 images created
- ✓ All major academic work represented
- ✓ Professional appearance
- ✓ Strong portfolio deployable
- **Result**: Competitive academic presence

### Week 3 Success
- ✓ 11 images created
- ✓ All projects represented (including current industry work)
- ✓ Employer-approved content
- ✓ Complete portfolio deployed
- **Result**: Comprehensive research showcase

---

## FINAL CHECKLIST (Before Considering "Done")

### Image Quality
- [ ] All images are exactly 160×160 pixels
- [ ] All images are in JPG format (or PNG if transparency needed)
- [ ] All images are under 500KB file size
- [ ] All images are clear and recognizable at thumbnail size
- [ ] All images have correct filenames (match requirements)
- [ ] All images are saved in `images/` directory

### Content Accuracy
- [ ] Images accurately represent the research/projects
- [ ] No proprietary information visible (or approved if visible)
- [ ] Professional quality (no obvious artifacts or errors)
- [ ] Consistent style across images (similar color schemes, fonts)

### Technical
- [ ] Images display correctly in HTML test page
- [ ] Hover effects work (if applicable)
- [ ] Images load quickly (<1 second)
- [ ] No broken image links

### Documentation
- [ ] Noted which approach was used for each image
- [ ] Documented any issues or workarounds
- [ ] Saved source files (Draw.io, PowerPoint, etc.) for future edits
- [ ] Committed to Git with descriptive message

---

## EMERGENCY SHORTCUTS

**If you need to deploy TOMORROW**:

### 4-Hour Emergency Plan
```
Hour 1: Profile photo (remove.bg + crop)
Hour 2: Download papers, extract 3 figures (thermal×2, respiration×1)
Hour 3: Run generate_portfolio_images.py for seismic×2
Hour 4: Quality check, deploy

Result: 6 images, MVP live
```

### 8-Hour Rush Plan
```
Hours 1-4: Above 4-hour plan (6 images)
Hour 5-6: Multi-view calibration (Draw.io simple diagram)
Hour 7-8: Depth maps (use generated script)

Result: 9 images, strong portfolio live
```

**Acceptable to skip**: APEX ML, Acoustic Vision (proprietary, time-intensive)

---

## MOTIVATION & PERSPECTIVE

**Remember**:
- Jon Barron's website has ~15 projects with images accumulated over 10+ years
- You're creating 11 images for 7 projects in 2-3 weeks
- MVP with 6 images is already professional and deployable
- Perfect is the enemy of done
- You can always update images later

**Your advantages**:
- You have the technical skills (signal processing, Python, ML)
- You have the data (papers, CV, thesis)
- You have clear templates and scripts provided
- You know your research better than anyone

**Estimated vs. Reality**:
- Optimistic estimate: 15 hours
- Realistic estimate: 25-30 hours
- Pessimistic estimate: 40 hours
- **Most likely**: 25-30 hours over 2-3 weeks = Very achievable!

---

## FINAL RECOMMENDATION

**Recommended Path for Kim Ju O**:

1. **Week 1**: Focus on MVP (6 images, ~10 hours)
   - Immediate win: deployable website
   - Low risk: all public data
   - High impact: professional presence online

2. **Week 2**: Enhance while waiting for approval (9 images, +7 hours)
   - Incremental improvement
   - Still no approval needed
   - Very strong portfolio

3. **Week 3**: Complete if approved (11 images, +10 hours)
   - Full portfolio
   - Current work showcased
   - Maximum impact

**Total effort**: 27 hours over 3 weeks
**Result**: World-class academic portfolio website

**Start today**: Send approval email, prepare profile photo
**Deploy Week 1 MVP**: Be live in 7 days
**Enhance iteratively**: Add images as they're ready

**You can do this!** 🚀
