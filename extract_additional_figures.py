"""
Extract additional high-priority figures for project pages
Focus on Results, Performance, and Method visualizations
"""
import fitz  # PyMuPDF
from PIL import Image
import io
import os

class ProjectPageFigureExtractor:
    def __init__(self, output_dir="images"):
        self.output_dir = output_dir
        self.quality = 95
        os.makedirs(self.output_dir, exist_ok=True)

    def extract_page_as_image(self, pdf_path, page_number, zoom=3.0):
        """Extract page as high-res image"""
        try:
            doc = fitz.open(pdf_path)
            page = doc[page_number]
            mat = fitz.Matrix(zoom, zoom)
            pix = page.get_pixmap(matrix=mat)
            img_data = pix.tobytes("png")
            img = Image.open(io.BytesIO(img_data))
            doc.close()
            return img
        except Exception as e:
            print(f"❌ Error: {e}")
            return None

    def crop_and_save(self, img, crop_box, output_path, target_width=800):
        """Crop and save image at good resolution for web"""
        if img is None:
            return False

        # Crop (percentage-based)
        width, height = img.size
        left = int(width * crop_box[0] / 100)
        top = int(height * crop_box[1] / 100)
        right = int(width * crop_box[2] / 100)
        bottom = int(height * crop_box[3] / 100)
        img = img.crop((left, top, right, bottom))

        # Resize to target width maintaining aspect ratio
        aspect = img.size[1] / img.size[0]
        new_height = int(target_width * aspect)
        img = img.resize((target_width, new_height), Image.Resampling.LANCZOS)

        # Save
        output_full = os.path.join(self.output_dir, output_path)
        img.save(output_full, 'JPEG', quality=self.quality)
        print(f"✓ Saved: {output_path} ({img.size[0]}×{img.size[1]})")
        return True

    def extract_electronics2025_figures(self):
        """Extract priority figures from Electronics 2025 paper"""
        print("\n" + "="*60)
        print("📊 Electronics 2025 - Additional Figures")
        print("="*60)

        pdf_path = "electronics-14-04120.pdf"

        figures = [
            {
                "page": 13,
                "crop": (10, 15, 90, 85),
                "output": "electronics2025_confusion.jpg",
                "desc": "Figure 9: Confusion Matrix"
            },
            {
                "page": 12,
                "crop": (10, 15, 90, 85),
                "output": "electronics2025_ablation.jpg",
                "desc": "Figure 8: Ablation Study"
            },
            {
                "page": 10,
                "crop": (10, 15, 90, 85),
                "output": "electronics2025_roc.jpg",
                "desc": "Figure 10: ROC Curves"
            },
            {
                "page": 7,
                "crop": (10, 15, 90, 85),
                "output": "electronics2025_augmentation.jpg",
                "desc": "Figure 3: Data Augmentation"
            },
        ]

        success = 0
        for fig in figures:
            print(f"\n📄 {fig['desc']}")
            img = self.extract_page_as_image(pdf_path, fig['page'] - 1)
            if self.crop_and_save(img, fig['crop'], fig['output']):
                success += 1

        return success, len(figures)

    def extract_springer2024_figures(self):
        """Extract priority figures from Springer 2024 paper"""
        print("\n" + "="*60)
        print("📊 Springer 2024 - Additional Figures")
        print("="*60)

        pdf_path = "JSPS논문_게재본 (1).pdf"

        figures = [
            {
                "page": 9,
                "crop": (10, 10, 90, 50),
                "output": "springer2024_reprojection.jpg",
                "desc": "Figure 12: Reprojection Error"
            },
            {
                "page": 9,
                "crop": (10, 55, 60, 98),
                "output": "springer2024_vp_detection.jpg",
                "desc": "Figure 13: Vanishing Point Detection"
            },
            {
                "page": 5,
                "crop": (10, 15, 90, 70),
                "output": "springer2024_flow.jpg",
                "desc": "Figure 3: System Flow"
            },
        ]

        success = 0
        for fig in figures:
            print(f"\n📄 {fig['desc']}")
            img = self.extract_page_as_image(pdf_path, fig['page'] - 1)
            if self.crop_and_save(img, fig['crop'], fig['output']):
                success += 1

        return success, len(figures)

    def extract_sensors2020_figures(self):
        """Extract priority figures from Sensors 2020 paper"""
        print("\n" + "="*60)
        print("📊 Sensors 2020 - Additional Figures")
        print("="*60)

        pdf_path = "sensors-20-02977-v2.pdf"

        figures = [
            {
                "page": 11,
                "crop": (10, 55, 90, 98),
                "output": "sensors2020_zdomain.jpg",
                "desc": "Figure 9: Z-domain Classification"
            },
            {
                "page": 14,
                "crop": (10, 10, 90, 50),
                "output": "sensors2020_filter.jpg",
                "desc": "Figure 11: Filter Responses"
            },
            {
                "page": 7,
                "crop": (10, 15, 90, 75),
                "output": "sensors2020_flowchart.jpg",
                "desc": "Figure 3: Detection Flow"
            },
        ]

        success = 0
        for fig in figures:
            print(f"\n📄 {fig['desc']}")
            img = self.extract_page_as_image(pdf_path, fig['page'] - 1)
            if self.crop_and_save(img, fig['crop'], fig['output']):
                success += 1

        return success, len(figures)

    def extract_all(self):
        """Extract all priority figures"""
        print("\n" + "="*70)
        print("🚀 EXTRACTING ADDITIONAL FIGURES FOR PROJECT PAGES")
        print("="*70)

        total_success = 0
        total_figures = 0

        e_success, e_total = self.extract_electronics2025_figures()
        total_success += e_success
        total_figures += e_total

        s_success, s_total = self.extract_springer2024_figures()
        total_success += s_success
        total_figures += s_total

        sen_success, sen_total = self.extract_sensors2020_figures()
        total_success += sen_success
        total_figures += sen_total

        print("\n" + "="*70)
        print(f"📊 EXTRACTION COMPLETE: {total_success}/{total_figures} figures")
        print("="*70)

        if total_success == total_figures:
            print("✅ ALL FIGURES EXTRACTED SUCCESSFULLY!")
        else:
            print(f"⚠️  {total_figures - total_success} figure(s) had issues")

        print(f"\n📁 Output: {os.path.abspath(self.output_dir)}/")

        return total_success, total_figures

if __name__ == "__main__":
    extractor = ProjectPageFigureExtractor()
    extractor.extract_all()

    input("\n\nPress Enter to exit...")
